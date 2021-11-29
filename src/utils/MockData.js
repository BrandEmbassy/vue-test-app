// eslint-disable-next-line no-undef
var faker = require('faker');

const userName = faker.name.findName();
export const USER = {
  id: 1,
  name: userName,
  email: faker.internet.email(),
  avatar: `https://avatars.dicebear.com/api/personas/${userName}.svg`
};

export const mockArray = function(n, callback) {
  let items = [];

  for (let i = 0; i < n; i++) {
    items.push(callback());
  }

  return items;
};

export const mockThread = function() {
  const name = faker.name.findName();
  return {
    user: {
      name,
      avatar: `https://avatars.dicebear.com/api/personas/${name}.svg`,
      online: faker.random.boolean()
    },
    replies: faker.random.number(21),
    msg: faker.lorem.paragraph()
  };
};

export const CHANNELS = [
  {
    title: 'General',
    subtitle: faker.name.findName() + ': Všetci ma môžte!',
    unread: faker.random.boolean()
  },
  {
    title: 'Backend Devs',
    subtitle: 'Pokec backenďáků',
    unread: faker.random.boolean()
  },
  {
    title: 'Frontend',
    subtitle: faker.name.findName() + ': ' + faker.lorem.sentence(),
    unread: faker.random.boolean()
  },
  {
    title: 'Office',
    subtitle: faker.name.findName() + ': ' + faker.lorem.sentence(),
    unread: faker.random.boolean()
  },
  {
    title: 'Product',
    subtitle: faker.name.findName() + ': ' + faker.lorem.sentence(),
    unread: faker.random.boolean()
  },
];

export const mockChat = function() {
  const title = faker.name.findName();
  return {
    title,
    subtitle: faker.lorem.sentence(),
    unread: faker.random.boolean(),
    online: faker.random.boolean(),
    group: false,
    avatar: `https://avatars.dicebear.com/api/personas/${title}.svg`
  };
};

export const CHATS = [
  {
    title: 'Honza, Michal, +2',
    subtitle: faker.lorem.sentence(),
    unread: faker.random.boolean(),
    online: faker.random.boolean(),
    group: true,
    avatar: `https://avatars.dicebear.com/api/personas/${faker.random.alphaNumeric()}.svg`
  },
  {
    title: faker.name.firstName() + ' and ' + faker.name.firstName(),
    subtitle: faker.lorem.sentence(),
    unread: faker.random.boolean(),
    online: faker.random.boolean(),
    group: true,
    avatar: `https://avatars.dicebear.com/api/personas/${faker.random.alphaNumeric()}.svg`
  },
  {
    title: 'Podporná skupina',
    subtitle: faker.lorem.sentence(),
    unread: faker.random.boolean(),
    online: faker.random.boolean(),
    group: true,
    avatar: `https://avatars.dicebear.com/api/personas/${faker.random.alphaNumeric()}.svg`
  },
];

export const mockActivity = function() {
  return {
    user: {
      name: faker.name.findName(),
      first_name: faker.name.firstName(),
      avatar: `https://avatars.dicebear.com/api/personas/${faker.random.alphaNumeric()}.svg`,
      online: faker.random.boolean()
    },
    action: ['mentioned you', 'replied', 'reacted to your message', 'mentioned @backend'][faker.random.number(3)],
    location: ['#General', '#Backend', '#Pokec', '#Frontend', '#Office', '#Product'][faker.random.number(5)],
    message: faker.lorem.paragraph(),
    type: ['mention', 'reply', 'emoji'][faker.random.number(2)],
    type_value: ['thumb_up', 'favorite'][faker.random.number(1)],
    created_at: faker.date.recent(),
    read: faker.random.boolean()
  };
};

export const mockActiveThread = function() {
  return {
    location: ['#General', '#Backend', '#Pokec', '#Frontend', '#Office', '#Product'][faker.random.number(5)],
    firstMessage: {
      user: {
        name: faker.name.findName(),
        first_name: faker.name.firstName(),
        avatar: `https://avatars.dicebear.com/api/personas/${faker.random.alphaNumeric()}.svg`,
        online: faker.random.boolean()
      },
      message: faker.lorem.paragraph()
    },
    lastMessage: {
      message: faker.lorem.paragraph(),
      user: {
        name: faker.name.findName(),
        online: faker.random.boolean()
      }
    },
    created_at: faker.date.recent(),
    read: faker.random.boolean()
  };
};

export const mockAnnouncement = function() {
  return {
    img: faker.image.image(),
    title: faker.commerce.productName(),
    body: faker.random.number(10) > 2 ? faker.lorem.paragraphs(faker.random.number(3) + 1) : '',
    read: faker.random.boolean()
  };
};

const chatSides = [
  {
    id: 1,
    name: faker.name.findName(),
    avatar: `https://avatars.dicebear.com/api/personas/${faker.random.alphaNumeric()}.svg`,
    online: faker.random.boolean()
  },
  {
    id: 2,
    name: faker.name.findName(),
    avatar: `https://avatars.dicebear.com/api/personas/${faker.random.alphaNumeric()}.svg`,
    online: faker.random.boolean()
  },
];
let side = 0;
export const mockChatMessage = function() {
  return {
    user: chatSides[(side++) % 2],
    messages: mockArray(faker.random.number(3)+1, () => faker.lorem.sentences(faker.random.number(5)+1)),
    created_at: faker.date.recent().getDate()
  };
};

export const mockSearchResults = function() {
  const name = faker.name.findName();
  return {
    user: {
      name,
      avatar: `https://avatars.dicebear.com/api/personas/${name}.svg`,
      online: faker.random.boolean()
    },
    channel: faker.random.arrayElement(CHANNELS),
    text: faker.lorem.paragraph()
  };
};
