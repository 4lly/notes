
/**
 * composition api对比optiosn api？
 * 更好的代码组织
 * 更好的逻辑复用
 * 更好的类型推导
 * 
 * composition api对比react hooks？
 * 前者setup只会被调用一次，而后者会被多次调用
 * 前者无需useMemo、useCallback，因为setup只调用一次
 * 前者无需考虑调用顺序，而后者需要保证hooks的顺序一致
 * 前者reactive +ref 比后者useSatet要难理解
 */