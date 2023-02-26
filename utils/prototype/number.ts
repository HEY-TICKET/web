declare global {
  interface Number {
    addComma(): string;
  }
}

Number.prototype.addComma = function (): string {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  return this.toString().replace(regexp, ',') || '';
};

export {};
