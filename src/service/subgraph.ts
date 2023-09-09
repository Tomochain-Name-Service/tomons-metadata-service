import { gql } from 'graphql-request';

const ETH_NAMEHASH =
  '0xee7289196899d8c5bc40150453f87a5ebf33e301b7ed2537d6cc0ba5caeadcd5';

export const GET_DOMAINS = gql`
  query getDomains($tokenId: String) {
    domain(id: $tokenId) {
      id
      labelhash
      name
      createdAt
      parent {
        id
      }
      resolver {
        texts
        address
      }
    }
  }
`;

export const GET_DOMAINS_BY_LABELHASH = gql`
  query getDomains($tokenId: String) {
    domains(
      where: {
        parent: "${ETH_NAMEHASH}",
        labelhash: $tokenId
      }
    ) {
      id
      labelhash
      name
      createdAt
      parent {
        id
      }
      resolver {
        texts
        address
      }
    }
  }
`;

export const GET_REGISTRATIONS = gql`
  query getRegistration($labelhash: String) {
    registrations(
      orderBy: registrationDate
      orderDirection: desc
      where: { id: $labelhash }
    ) {
      labelName
      registrationDate
      expiryDate
    }
  }
`;

export const GET_WRAPPED_DOMAIN = gql`
query getWrappedDomain($tokenId: String) {
  wrappedDomain(id: $tokenId) {
    id
    owner {
      id
    }
    fuses
    expiryDate
    domain {
      name
    }
  }
}
`;
