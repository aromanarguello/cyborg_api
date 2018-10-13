export const typeDefs = /* GraphQL */ `type AggregateOrder {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  item: String!
  price: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
  provider: String!
  owner: User!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  item: String!
  price: Float!
  provider: String!
  owner: UserCreateOneWithoutOrdersInput!
}

input OrderCreateManyWithoutOwnerInput {
  create: [OrderCreateWithoutOwnerInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateWithoutOwnerInput {
  item: String!
  price: Float!
  provider: String!
}

type OrderEdge {
  node: Order!
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  item_ASC
  item_DESC
  price_ASC
  price_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  provider_ASC
  provider_DESC
}

type OrderPreviousValues {
  id: ID!
  item: String!
  price: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
  provider: String!
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
  OR: [OrderSubscriptionWhereInput!]
  NOT: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  item: String
  price: Float
  provider: String
  owner: UserUpdateOneRequiredWithoutOrdersInput
}

input OrderUpdateManyWithoutOwnerInput {
  create: [OrderCreateWithoutOwnerInput!]
  delete: [OrderWhereUniqueInput!]
  connect: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutOwnerInput!]
}

input OrderUpdateWithoutOwnerDataInput {
  item: String
  price: Float
  provider: String
}

input OrderUpdateWithWhereUniqueWithoutOwnerInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutOwnerDataInput!
}

input OrderUpsertWithWhereUniqueWithoutOwnerInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutOwnerDataInput!
  create: OrderCreateWithoutOwnerInput!
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  item: String
  item_not: String
  item_in: [String!]
  item_not_in: [String!]
  item_lt: String
  item_lte: String
  item_gt: String
  item_gte: String
  item_contains: String
  item_not_contains: String
  item_starts_with: String
  item_not_starts_with: String
  item_ends_with: String
  item_not_ends_with: String
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  provider: String
  provider_not: String
  provider_in: [String!]
  provider_not_in: [String!]
  provider_lt: String
  provider_lte: String
  provider_gt: String
  provider_gte: String
  provider_contains: String
  provider_not_contains: String
  provider_starts_with: String
  provider_not_starts_with: String
  provider_ends_with: String
  provider_not_ends_with: String
  owner: UserWhereInput
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Role {
  Admin
  Owner
  Physician
  Patient
  Provider
  Disabled
}

type Subscription {
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String
  firstName: String!
  middleName: String
  lastName: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  lastLoggedIn: DateTime
  role: Role!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String
  firstName: String!
  middleName: String
  lastName: String!
  password: String!
  lastLoggedIn: DateTime
  role: Role
  orders: OrderCreateManyWithoutOwnerInput
}

input UserCreateOneWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutOrdersInput {
  email: String
  firstName: String!
  middleName: String
  lastName: String!
  password: String!
  lastLoggedIn: DateTime
  role: Role
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  firstName_ASC
  firstName_DESC
  middleName_ASC
  middleName_DESC
  lastName_ASC
  lastName_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  lastLoggedIn_ASC
  lastLoggedIn_DESC
  role_ASC
  role_DESC
}

type UserPreviousValues {
  id: ID!
  email: String
  firstName: String!
  middleName: String
  lastName: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  lastLoggedIn: DateTime
  role: Role!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  firstName: String
  middleName: String
  lastName: String
  password: String
  lastLoggedIn: DateTime
  role: Role
  orders: OrderUpdateManyWithoutOwnerInput
}

input UserUpdateOneRequiredWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  update: UserUpdateWithoutOrdersDataInput
  upsert: UserUpsertWithoutOrdersInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutOrdersDataInput {
  email: String
  firstName: String
  middleName: String
  lastName: String
  password: String
  lastLoggedIn: DateTime
  role: Role
}

input UserUpsertWithoutOrdersInput {
  update: UserUpdateWithoutOrdersDataInput!
  create: UserCreateWithoutOrdersInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  middleName: String
  middleName_not: String
  middleName_in: [String!]
  middleName_not_in: [String!]
  middleName_lt: String
  middleName_lte: String
  middleName_gt: String
  middleName_gte: String
  middleName_contains: String
  middleName_not_contains: String
  middleName_starts_with: String
  middleName_not_starts_with: String
  middleName_ends_with: String
  middleName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  lastLoggedIn: DateTime
  lastLoggedIn_not: DateTime
  lastLoggedIn_in: [DateTime!]
  lastLoggedIn_not_in: [DateTime!]
  lastLoggedIn_lt: DateTime
  lastLoggedIn_lte: DateTime
  lastLoggedIn_gt: DateTime
  lastLoggedIn_gte: DateTime
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`