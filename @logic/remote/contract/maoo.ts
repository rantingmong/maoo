export default interface Maoo {
  checkEmail    (input: string): Promise<boolean>

  loginEmail    (email: string, password: string): Promise<void>
  registerEmail (email: string, password: string): Promise<void>
}
