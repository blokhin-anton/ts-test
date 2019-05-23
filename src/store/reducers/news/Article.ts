export default interface IArticle {
  id: number,
  title: string,
  shortContent: string,
  content: string,
  tags: Array<string>,
  autors: Array<{id: string, fullName: string}>
}