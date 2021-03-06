export enum ErrorCode{
	
	//Core
	Unknown = 1000,
	Server = 1001,
	NotFound = 1002,
	Connection = 1003,
	
	//Users
	USR_Invalid = 2000,
	USR_NotFound = 2001,
	USR_Disabled = 2002,
	
	USR_InvalidLogin = 2003,
	USR_InvalidUsername = 2004,
	USR_InvalidEmail = 2005,
	USR_InvalidPassword = 2006,
	USR_InvalidLimit = 2005
}

export const ErrorMessage: string[] = []

//Core
ErrorMessage[ErrorCode.Unknown] = 'An unknown error occured'
ErrorMessage[ErrorCode.Server] = 'Server error occured, please contact administrator'
ErrorMessage[ErrorCode.NotFound] = 'Page could not be found'
ErrorMessage[ErrorCode.Connection] = 'Could not find server, please check your internet connection'

//Users
ErrorMessage[ErrorCode.USR_Invalid] = 'User identifier was not given or invalid'
ErrorMessage[ErrorCode.USR_NotFound] = 'User account could not be found'
ErrorMessage[ErrorCode.USR_Disabled] = 'User account has been disabled, please contact administrator'

ErrorMessage[ErrorCode.USR_InvalidLogin] = 'User login was not given or invalid'
ErrorMessage[ErrorCode.USR_InvalidUsername] = 'Username was not given or invalid'
ErrorMessage[ErrorCode.USR_InvalidEmail] = 'E-mail address was not given or invalid'
ErrorMessage[ErrorCode.USR_InvalidPassword] = 'Password was not given or invalid'
ErrorMessage[ErrorCode.USR_InvalidLimit] = 'Limit was not given or invalid'