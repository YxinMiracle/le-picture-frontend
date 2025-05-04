declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number
    data?: boolean
    msg?: string
  }

  type BaseResponseLoginUserVO_ = {
    code?: number
    data?: LoginUserVO
    msg?: string
  }

  type BaseResponseLong_ = {
    code?: number
    data?: number
    msg?: string
  }

  type BaseResponsePageUserVO_ = {
    code?: number
    data?: PageUserVO_
    msg?: string
  }

  type BaseResponseUser_ = {
    code?: number
    data?: User1
    msg?: string
  }

  type BaseResponseUserVO_ = {
    code?: number
    data?: UserVO
    msg?: string
  }

  type DeleteRequest = {
    id?: number
  }

  type getLoginUsingGETParams = {
    /** roleId */
    roleId: string
    /** userId */
    userId: string
  }

  type getRegExpUsingGETParams = {
    /** regexp1 */
    regexp1: string
  }

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number
  }

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number
  }

  type helloUsingDELETEParams = {
    /** name */
    name?: string
  }

  type helloUsingGETParams = {
    /** name */
    name?: string
  }

  type helloUsingPATCHParams = {
    /** name */
    name?: string
  }

  type helloUsingPOSTParams = {
    /** name */
    name?: string
  }

  type helloUsingPUTParams = {
    /** name */
    name?: string
  }

  type LoginUserVO = {
    createTime?: string
    editTime?: string
    id?: number
    updateTime?: string
    userAccount?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type PageUserVO_ = {
    current?: number
    pages?: number
    records?: UserVO[]
    size?: number
    total?: number
  }

  type saveUserUsingDELETEParams = {
    age?: number
    name?: string
  }

  type saveUserUsingGETParams = {
    age?: number
    name?: string
  }

  type saveUserUsingPATCHParams = {
    age?: number
    name?: string
  }

  type saveUserUsingPOSTParams = {
    age?: number
    name?: string
  }

  type saveUserUsingPUTParams = {
    age?: number
    name?: string
  }

  type User = {
    age?: number
    name?: string
  }

  type User1 = {
    createTime?: string
    editTime?: string
    id?: number
    isDelete?: number
    updateTime?: string
    userAccount?: string
    userAvatar?: string
    userName?: string
    userPassword?: string
    userProfile?: string
    userRole?: string
  }

  type UserAddRequest = {
    userAccount?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type UserLoginRequest = {
    userAccount?: string
    userPassword?: string
  }

  type UserQueryRequest = {
    current?: number
    id?: number
    offset?: number
    pageSize?: number
    sortField?: string
    sortOrder?: string
    userAccount?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type UserRegisterRequest = {
    checkPassword?: string
    userAccount?: string
    userPassword?: string
  }

  type UserUpdateRequest = {
    id?: number
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type UserVO = {
    createTime?: string
    id?: number
    userAccount?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }
}
