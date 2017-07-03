import test from 'ava';
import m from './';

test('lower case', async t => {
  const r = await m('unicorn.png');
  t.true(r);
});
test('upper case', async t => {
  const r = await m('unicorn.PNG');
  t.true(r);
});
test('remote image', async t => {
  const r = await m(
      'https://upload.wikimedia.org/wikipedia/en/4/45/One_black_Pixel.png');
  t.true(r);
});
test('file not found', async t => {
  const r = await m('unicorn.zip');
  t.false(r);
});
test('no extension', async t => {
  const r = await m('unicornzip');
  t.false(r);
});
test('bad file type', async t => {
  const r = await m('unicorn.txt');
  t.false(r);
});
