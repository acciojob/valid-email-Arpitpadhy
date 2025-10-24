function validEmail(str) {
  //your JS code here.
	  if (!str || typeof str !== 'string') return false;

  // Regex explanation:
  // ^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)* → local part: starts with alphanumeric, allows . _ - but not consecutively
  // @ → mandatory @ symbol
  // [a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)* → domain part: similar rules as local part
  // \.[a-zA-Z]{2,} → domain extension: starts with dot, followed by 2+ letters
  const regex = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;

  return regex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
