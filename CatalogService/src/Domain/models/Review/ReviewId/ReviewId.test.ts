import { ReviewId } from "./ReviewId";

// nanoid() をモックする
jest.mock("nanoid", () => ({
  nanoid: () => "testIdWithExactLength",
}));

describe("ReviewId", () => {
  test("デフォルトの値でReviewIdを作成する", () => {
    const reviewId = new ReviewId();
    expect(reviewId.value).toBe("testIdWithExactLength");
  });
  
  test("指定された値でReviewIdを生成する", () => {
    const value = "customId";
    const reviewId = new ReviewId(value);
    expect(reviewId.value).toBe(value);
  });
  
  test("最小長未満の値でReviewIdを生成するとエラーを投げる", () => {
    const shortValue = "";
    expect(() => new ReviewId(shortValue)).toThrow(
      `ReviewIdは${ReviewId.MIN_LENGTH}文字以上、${ReviewId.MAX_LENGTH}文字以下でなければなりません。`
    );
  });
  
  test("最大長を超える値でReviewIdを生成するとエラーを投げる", () => {
    const longValue = "a".repeat(ReviewId.MAX_LENGTH + 1);
    expect(() => new ReviewId(longValue)).toThrow(
      `ReviewIdは${ReviewId.MIN_LENGTH}文字以上、${ReviewId.MAX_LENGTH}文字以下でなければなりません。`
    );
  });
});