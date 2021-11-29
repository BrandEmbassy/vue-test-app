import {
  CHANNELS,
  CHATS, mockActiveThread,
  mockActivity,
  mockAnnouncement,
  mockArray, mockChat, mockChatMessage, mockSearchResults,
  mockThread
} from 'src/utils/MockData';

export class Ajax {
  static mock(data) {
    return new Promise(resolve => {
      resolve(data);
    });
  }

  static getChannelConversations() {
    return this.mock(
      mockArray(20, mockThread)
    );
  }

  static async getChannelsList() {
    return this.mock(CHANNELS);
  }

  static async getChatsList() {
    return this.mock([...mockArray(7, mockChat), ...CHATS]);
  }

  static async getRecentActivities() {
    return this.mock(
      mockArray(30, mockActivity)
    );
  }

  static async getAnnouncements() {
    return this.mock(
      mockArray(6, mockAnnouncement)
    );
  }

  static async getChatMessages() {
    return this.mock(
      mockArray(20, mockChatMessage)
    );
  }

  static async getActiveThreads() {
    return this.mock(
      mockArray(20, mockActiveThread)
    );
  }

  static async getSearchResults() {
    return this.mock(
      mockArray(100, mockSearchResults)
    );
  }
}
