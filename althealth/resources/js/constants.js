import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    appLogo: {
      animation: 'App-logo-spin infinite 20s linear',
      height: '40vmin',
      pointerEvents: 'none'
    },
    appHeader:{
        backgroundColor: theme.palette.primary.main,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    image: {
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light'
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }))



const baseUrl = 'http://www.althealth.co.za';
const ClientID = 'ClientID';
const Name = 'Name';
const Surname = 'Surname';
const Workphone = 'Workphone';
const Code = 'Code';
const Address = 'Address';
const Telephone = 'Telephone';
const Cellphone = 'Cellphone';
const Email = 'Email';
const ReferenceID = 'ReferenceID';
const SAIDLength = 13;
const Description = 'Description';
const Cost = 'Cost';
const MinLevel = 'MinLevel';
const CurrentLevel = 'CurrentLevel';
const NappiCode = 'NappiCode';
export const VAT = 0.15;
const SupplierID = 'SupplierID';
const Contact = 'Contact';
const Bank = 'Bank';
const BankCode = 'BankCode';
const BankNumber = 'BankNumber';
const AccountType = 'AccountType';
const Password = 'Password';
const SATelLength = 10;
const SupplementID = 'SupplementID';
export default {
	fields: {
		Email,
		Password,
		ClientID,
		Name,
		Surname,
		Workphone,
		Code,
		Address,
		Telephone,
		Cellphone,
		ReferenceID,
		Cost,
		Description,
		MinLevel,
		CurrentLevel,
		NappiCode,
		VAT,
		SupplierID,
		Contact,
		Bank,
		BankCode,
		BankNumber,
        AccountType,
        SupplementID
	},
	validations: {
		SATelLength: SATelLength,
		SAIDLength: SAIDLength,
		SAIDRegex: '^\\d',
		SATelRegex: '^\\(\\d{3}\\)-\\(\\d{3}\\)-\\(\\d{4}\\)',
		SupplementIDLength: 20,
		SupplierIDLength: 15,
		DescriptionLength: 30,
		NappiCodeLength: 20,
		NameLength: 30,
		SurnameLength: 50,
		AddressLength: 200,
		CodeLength: 4,
		EmailLength: 200,
		ReferenceIDLength: 20,
		PasswordLength: 15,
		PasswordMinLength: 8,
	},
	errorMessages: {
		ClientIDLuhnFailureMsg: `${ClientID} is invalid SA Identity Number`,
		SAIDLengthErrorMsg: `South African ID Length is ${SAIDLength} characters`,
		SATelLengthErrorMsg: `South African ${Telephone} length is ${SATelLength} characters`,
		SATelRegexErrorMsg: `Please fill in field in (000)-(000)-(0000) format`,
	},
};

export{ useStyles,baseUrl};
