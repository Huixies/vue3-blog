import moment from "moment";
import { Post } from "@/types";

moment.locale('zh-cn');
export const basePost: Post = {
  id: 1,
  title: "米修在线",
  markdown: "课程列表",
  html: "<p>课程列表</p>",
  authorId: 1,
  created: moment(),
};

export const todayPost: Post = {
  ...basePost,
  id:1,
  title: "今天",
};

export const thisWeek: Post = {
  ...basePost,
  id:2,
  title: "本周",
  created: moment().subtract(2, "days"),
};

export const thisMonth: Post = {
  ...basePost,
  id:3,
  title: "本月",
  created: moment().subtract(2, "weeks"),
};
