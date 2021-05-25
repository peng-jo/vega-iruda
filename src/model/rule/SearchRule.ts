import { TextRule } from '../../framework/rule/TextRule';

export class SearchRule implements TextRule {
  public match(src: string): boolean {
    return src.startsWith('!검색 ');
  }

  public async makeMessage(src: string): Promise<string> {
    const match = /!검색 (.*)/.exec(src);
    const word = match ? match[1] : '';
    return `https://www.google.co.kr/search?q=${word}`;
  }
}
