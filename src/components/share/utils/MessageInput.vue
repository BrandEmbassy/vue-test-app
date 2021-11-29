<template>
  <div class="messageInputContainer">
    <div class="editor">
      <editor-menu-bar
        :editor="editor"
        v-slot="{ commands, isActive, focused }"
      >
        <div class="menubar flex">
          <q-space/>

          <div
            class="is-hidden"
            :class="{ 'is-focused': focused }"
          >
            <q-btn
              size="sm"
              class="menubar__button"
              :class="{ 'is-active': isActive.bold() }"
              @click="commands.bold"
              icon="format_bold"
              flat
            >
              <q-tooltip>Bold</q-tooltip>
            </q-btn>

            <q-btn
              size="sm"
              class="menubar__button"
              :class="{ 'is-active': isActive.italic() }"
              @click="commands.italic"
              icon="format_italic"
              flat
            >
              <q-tooltip>Italic</q-tooltip>
            </q-btn>

            <q-btn
              size="sm"
              class="menubar__button"
              :class="{ 'is-active': isActive.strike() }"
              @click="commands.strike"
              icon="strikethrough_s"
              flat
            >
              <q-tooltip>Strikethrough</q-tooltip>
            </q-btn>

            <q-btn
              size="sm"
              class="menubar__button"
              :class="{ 'is-active': isActive.underline() }"
              @click="commands.underline"
              icon="format_underline"
              flat
            >
              <q-tooltip>Underlined</q-tooltip>
            </q-btn>

            <q-btn
              size="sm"
              class="menubar__button"
              :class="{ 'is-active': isActive.code_block() }"
              @click="commands.code_block"
              icon="code"
              flat
            >
              <q-tooltip>Code block</q-tooltip>
            </q-btn>

            <q-btn
              size="sm"
              class="menubar__button"
              :class="{ 'is-active': isActive.heading({ level: 1 }) }"
              @click="commands.heading({ level: 1 })"
              flat
            >
              H1
              <q-tooltip>Heading 1</q-tooltip>
            </q-btn>

            <q-btn
              size="sm"
              class="menubar__button"
              :class="{ 'is-active': isActive.heading({ level: 2 }) }"
              @click="commands.heading({ level: 2 })"
              flat
            >
              H2
              <q-tooltip>Heading 2</q-tooltip>
            </q-btn>

            <q-btn
              size="sm"
              class="menubar__button"
              :class="{ 'is-active': isActive.bullet_list() }"
              @click="commands.bullet_list"
              icon="format_list_bulleted"
              flat
            >
              <q-tooltip>Bullet list</q-tooltip>
            </q-btn>

            <q-btn
              size="sm"
              class="menubar__button"
              :class="{ 'is-active': isActive.ordered_list() }"
              @click="commands.ordered_list"
              icon="format_list_numbered"
              flat
            >
              <q-tooltip>Numbered list</q-tooltip>
            </q-btn>

            <q-btn
              size="sm"
              class="menubar__button"
              :class="{ 'is-active': isActive.blockquote() }"
              @click="commands.blockquote"
              icon="format_quote"
              flat
            >
              <q-tooltip>Quote</q-tooltip>
            </q-btn>
          </div>
        </div>
      </editor-menu-bar>

      <editor-content
        class="editor__content"
        :editor="editor"
      />

      <editor-menu-bar :editor="editor">
        <div class="menubar flex">
          <div class="flex">
            <q-btn
              class="menubar__button"
              icon="alternate_email"
              size="sm"
              flat
            >
              <q-tooltip>Mention</q-tooltip>
            </q-btn>

            <q-btn
              class="menubar__button"
              icon="attach_file"
              size="sm"
              flat
            >
              <q-tooltip>Attach file</q-tooltip>
            </q-btn>

            <q-btn
              class="menubar__button"
              icon="mood"
              size="sm"
              flat
            >
              <q-tooltip>Insert emoji</q-tooltip>
            </q-btn>

            <q-btn
              class="menubar__button"
              icon="gif"
              size="sm"
              flat
            >
              <q-tooltip>Send GIF</q-tooltip>
            </q-btn>

            <q-btn
              class="menubar__button"
              icon="check_circle_outline"
              size="sm"
              flat
            >
              <q-tooltip>Create poll</q-tooltip>
            </q-btn>
          </div>

          <q-space/>

          <div class="flex">
            <q-btn
              class="menubar__button"
              icon="send"
              size="sm"
              flat
            >
              <q-tooltip>Send Message (CTRL+Enter)</q-tooltip>
            </q-btn>
          </div>
        </div>
      </editor-menu-bar>

      <div
        class="suggestion-list"
        v-show="showSuggestions"
        ref="suggestions"
      >
        <template v-if="hasResults">
          <div
            v-for="(user, index) in filteredUsers"
            :key="user.id"
            class="suggestion-list__item"
            :class="{ 'is-selected': navigatedUserIndex === index }"
            @click="selectUser(user)"
          >
            {{ user.name }}
          </div>
        </template>
        <div
          v-else
          class="suggestion-list__item is-empty"
        >
          No users found
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fuse from 'fuse.js';
import tippy, { sticky } from 'tippy.js';
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
  Mention,
  Blockquote,
  BulletList,
  CodeBlock,
  HardBreak,
  Heading,
  ListItem,
  OrderedList,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Placeholder
} from 'tiptap-extensions';


export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
          new Placeholder({
            emptyEditorClass: 'is-editor-empty',
            emptyNodeClass: 'is-empty',
            emptyNodeText: 'Start a new conversation. Try @ to mention someone',
            showOnlyWhenEditable: false,
            showOnlyCurrent: false
          }),
          new Mention({
            // a list of all suggested items
            items: async() => {
              await new Promise(resolve => {
                setTimeout(resolve, 500);
              });
              return [
                { id: 1, name: 'Sven Adlung' },
                { id: 2, name: 'Patrick Baber' },
                { id: 3, name: 'Nick Hirche' },
                { id: 4, name: 'Philip Isik' },
                { id: 5, name: 'Timo Isik' },
                { id: 6, name: 'Philipp Kühn' },
                { id: 7, name: 'Hans Pagel' },
                { id: 8, name: 'Sebastian Schrama' },
              ];
            },
            // is called when a suggestion starts
            onEnter: ({
              items, query, range, command, virtualNode
            }) => {
              this.query = query;
              this.filteredUsers = items;
              this.suggestionRange = range;
              this.renderPopup(virtualNode);
              // we save the command for inserting a selected mention
              // this allows us to call it inside of our custom popup
              // via keyboard navigation and on click
              this.insertMention = command;
            },
            // is called when a suggestion has changed
            onChange: ({
              items, query, range, virtualNode
            }) => {
              this.query = query;
              this.filteredUsers = items;
              this.suggestionRange = range;
              this.navigatedUserIndex = 0;
              this.renderPopup(virtualNode);
            },
            // is called when a suggestion is cancelled
            onExit: () => {
              // reset all saved values
              this.query = null;
              this.filteredUsers = [];
              this.suggestionRange = null;
              this.navigatedUserIndex = 0;
              this.destroyPopup();
            },
            // is called on every keyDown event while a suggestion is active
            onKeyDown: ({ event }) => {
              if (event.key === 'ArrowUp') {
                this.upHandler();
                return true;
              }
              if (event.key === 'ArrowDown') {
                this.downHandler();
                return true;
              }
              if (event.key === 'Enter') {
                this.enterHandler();
                return true;
              }
              return false;
            },
            // is called when a suggestion has changed
            // this function is optional because there is basic filtering built-in
            // you can overwrite it if you prefer your own filtering
            // in this example we use fuse.js with support for fuzzy search
            onFilter: async(items, query) => {
              if (!query) {
                return items;
              }
              await new Promise(resolve => {
                setTimeout(resolve, 500);
              });
              const fuse = new Fuse(items, {
                threshold: 0.2,
                keys: ['name']
              });
              return fuse.search(query).map(item => item.item);
            }
          }),
        ],
        content: ''
      }),
      query: null,
      suggestionRange: null,
      filteredUsers: [],
      navigatedUserIndex: 0,
      insertMention: () => {}
    };
  },
  computed: {
    hasResults() {
      return this.filteredUsers.length;
    },
    showSuggestions() {
      return this.query || this.hasResults;
    }
  },
  methods: {
    // navigate to the previous item
    // if it's the first item, navigate to the last one
    upHandler() {
      this.navigatedUserIndex = ((this.navigatedUserIndex + this.filteredUsers.length) - 1) % this.filteredUsers.length;
    },
    // navigate to the next item
    // if it's the last item, navigate to the first one
    downHandler() {
      this.navigatedUserIndex = (this.navigatedUserIndex + 1) % this.filteredUsers.length;
    },
    enterHandler() {
      const user = this.filteredUsers[this.navigatedUserIndex];
      if (user) {
        this.selectUser(user);
      }
    },
    // we have to replace our suggestion text with a mention
    // so it's important to pass also the position of your suggestion text
    selectUser(user) {
      this.insertMention({
        range: this.suggestionRange,
        attrs: {
          id: user.id,
          label: user.name
        }
      });
      this.editor.focus();
    },
    // renders a popup with suggestions
    // tiptap provides a virtualNode object for using popper.js (or tippy.js) for popups
    renderPopup(node) {
      if (this.popup) {
        return;
      }
      // ref: https://atomiks.github.io/tippyjs/v6/all-props/
      this.popup = tippy('.page', {
        getReferenceClientRect: node.getBoundingClientRect,
        appendTo: () => document.body,
        interactive: true,
        sticky: true, // make sure position of tippy is updated when content changes
        plugins: [sticky],
        content: this.$refs.suggestions,
        trigger: 'mouseenter', // manual
        showOnCreate: true,
        theme: 'dark',
        placement: 'top-start',
        inertia: true,
        duration: [400, 200]
      });
    },
    destroyPopup() {
      if (this.popup) {
        this.popup[0].destroy();
        this.popup = null;
      }
    }
  },
  beforeDestroy() {
    this.editor.destroy();
    this.destroyPopup();
  }
};
</script>

<style lang="scss">
.mention {
  background: rgba(0,0,0, 0.1);
  color: rgba(0,0,0, 0.6);
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  white-space: nowrap;
}
.mention-suggestion {
  color: rgba(0,0,0, 0.6);
}
.suggestion-list {
  padding: 0.2rem;
  border: 2px solid rgba(0,0,0, 0.1);
  font-size: 0.8rem;
  font-weight: bold;
  &__no-results {
    padding: 0.2rem 0.5rem;
  }
  &__item {
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
    margin-bottom: 0.2rem;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
    &.is-selected,
    &:hover {
      background-color: rgba(255,255,255, 0.2);
    }
    &.is-empty {
      opacity: 0.5;
    }
  }
}
.tippy-box[data-theme~=dark] {
  background-color: black;
  padding: 0;
  font-size: 1rem;
  text-align: inherit;
  color: white;
  border-radius: 5px;
}

.editor p.is-editor-empty:first-child::before {
  content: attr(data-empty-text);
  float: left;
  color: #aaa;
  pointer-events: none;
  height: 0;
  font-style: italic;
}

.messageInputContainer {
  background: $grey-4;
}

button:hover {
  color: $primary;
}

.menubar__button .q-btn__wrapper {
  padding-left: 6px;
  padding-right: 6px;
}

.q-btn.is-active {
  color: $indigo-14;
  font-weight: bold;
}

.q-btn.sendBtn {
  font-size: 10px;
  position: absolute;
  bottom: 34px;
  right: 8px;
}

.is-hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s linear, opacity 0.2s linear;

  & .always-visible {
    visibility: visible;
  }
}

.is-focused {
  visibility: visible;
  opacity: 1;
}

.ProseMirror {
  font-size: 1.1em;
  padding: 8px;
  padding-right: 36px;
  background: $grey-2;
  border: none;
  border-bottom: solid 2px $grey-2;

  &:focus {
    border-bottom: solid 2px $indigo-5;
    outline: none;
  }

  & p {
    margin: 0 0 0;
    margin-top: 4px;
    margin-bottom: 4px;
  }

  h1 {
    font-size: 2.4em;
    line-height: 0.5;
  }

  h2 {
    font-size: 2.0em;
    line-height: 0.5;
  }

  code {
    background: $indigo-2;
    padding: 0 2px 0 2px;
  }

  pre code {
    width: 100%;
    display: block;
    padding: 4px;
  }
}
</style>
