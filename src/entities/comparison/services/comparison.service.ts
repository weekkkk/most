import { $comparison, type GetComparisonDto, comparisonPage } from "../api";

export class ComparisonService {
  static getByPageId(_pageId: string) {
    if (!(_pageId in comparisonPage)) throw new Error(`pageId: ${_pageId}`);
    const pageId = comparisonPage[_pageId as keyof typeof comparisonPage];
    return $comparison<GetComparisonDto>(`/`, {
      params: {
        pageId,
      },
    });
  }
}
