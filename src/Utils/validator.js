export function validator(data, config) {
  const errors = {}
  function validate(validateMethod, dataField, configField) {
    switch (validateMethod) {
      case "isRequired":
        if (dataField.trim() === "") {
          return configField.message
        }
        break
      case "isEmail":
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.\S+$/
        if (!re.test(String(dataField).toLowerCase())) {
          return configField.message
        }
        break
      case "isCapitalSymbol":
        const re1 = /[A-Z]/g
        if (!re1.test(String(dataField))) {
          return configField.message
        }
        break
      case "isContainDigit":
        const re2 = /[0-9]/g
        if (!re2.test(String(dataField))) {
          return configField.message
        }
        break
      case "min":
        if (dataField.length < configField.value) {
          return configField.message
        }
        break
      default:
        return
    }
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      )
      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }
  return errors
}

export const validarConfig = {
  email: {
    isRequired: {
      message: "Email is required"
    },
    isEmail: {
      message: "Email is not valid"
    }
  },
  password: {
    isRequired: {
      message: "Password is required"
    },
    isPassword: {
      message: "Password is not valid"
    },
    isCapitalSymbol: {
      message: "Password must contain at least one capital letter"
    },
    isContainDigit: {
      message: "Password must contain at least one digit"
    },
    min: {
      message: "Password must be at least 8 characters long",
      value: 8
    }
  }
}
