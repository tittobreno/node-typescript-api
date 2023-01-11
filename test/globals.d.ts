declare var testRequest: import('supertest').SuperTest<
  import('supertest').Test
>;

declare module '*.json' {
  const value: any;
  export default value;
}
