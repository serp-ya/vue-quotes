class Quote {
  constructor({ message }) {
    this.id = this.generateId();
    this.message = message;
  }

  generateId() {
    return Date.now().toString(32);
  }
};

export default Quote;