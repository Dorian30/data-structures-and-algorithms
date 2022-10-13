import { similarWords } from '../../words_pattern';

test('similarWords', () => {
  expect(
    similarWords(['aabbcc', 'aakkff', 'akkffkk', 'tjjiijj', 'deftg'], 'mnnssnn')
  ).toStrictEqual(['akkffkk', 'tjjiijj']);
});
