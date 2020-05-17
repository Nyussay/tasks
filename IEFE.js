function imediate() {
  return iifeFunc => iifeFunc();
}
imediate()(() => Out.log('Меня вызвали!'));
