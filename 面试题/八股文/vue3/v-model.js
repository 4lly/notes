
/**
 * vue3
 * <Com v-model:title="aaa" ></Com>
 * 是以下的简写
 * <Com :title="aaa" @update:title="aaa = $event" ></Com>
 * 
 * vue2
 * <Com :title.sync="aaa"></Com>
 * 是以下的简写
 * <Com :title="aaa" @update:title="aaa = $event" ></Com>
 */