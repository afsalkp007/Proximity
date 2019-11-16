import gql from 'graphql-tag';

export const QUERY_USER = gql`
 query User($userId: String!) {
    user(userId: $userId) {
      id
      avatar
      name
      handle
      about
      following {
        id
      }
      followers {
        id
      }
      posts {
        uri
      }
    }
}
`;

export const QUERY_NOTIFICATION = gql`
  query Notifications($userId: String!) {
    notifications(userId: $userId) {
      actionUser {
        avatar
        handle
      }
      type
      createdAt
    }
  }
`;

export const QUERY_CHATS = gql`
  query Chats($userId: String!) {
    chats(userId: $userId) {
      id
      participants {
        id
        avatar
        handle
      }
      messages(last: 1) {
        body
        createdAt
      }
    }
  }
`;

export const QUERY_CHAT = gql`
  query Chat($chatId: String!) {
    chat(chatId: $chatId) {
      messages(last: 20) {
        id
        body
        createdAt
        author {
          id
          name
          avatar
        }
      }
    }
  }
`;

export const QUERY_DOES_FOLLOW = gql`
  query DoesFollow($userId: String!, $targetId: String!) {
    doesFollow(userId: $userId, targetId: $targetId)
  }
`;

export const QUERY_CHAT_EXISTS = gql`
  query ChatExists($userId: String!, $targetId: String!) {
    chatExists(userId: $userId, targetId: $targetId) {
      id
    }
  }
`;
