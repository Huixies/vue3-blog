import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  // it("解决Timeline异步问题", () => {
  //   mount({
  //     template:`<Suspense></Home></Suspense>`
  //   })
  // });
  it.only("测试加载动画", () => {
    const wrapper = mount(Home);
    console.log(wrapper.html);
    
    expect(wrapper.find("[data-test='progress']").exists()).toBe(true);
  });

  it("测试三个a标签的功能", () => {
    const wrapper = mount(Home);
    console.log(wrapper.html);
    
    expect(wrapper.findAll("[data-test='period']")).toHaveLength(3);
  });

  it("测试a标签的事件功能", async () => {
    const wrapper = mount(Home);
    const $today = wrapper.findAll("[data-test='period']")[0];
    expect($today.classes()).toContain("is-active");

    const $thisWeek = wrapper.findAll("[data-test='period']")[1];
    await $thisWeek.trigger("click");

    expect($today.classes()).not.toContain("is-active");
    expect($thisWeek.classes()).toContain("is-active");

    const $thisMonth = wrapper.findAll("[data-test='period']")[2];
    await $thisMonth.trigger("click");

    expect($thisWeek.classes()).not.toContain("is-active");
    expect($thisMonth.classes()).toContain("is-active");
  });

  it("测试数据加载功能", async () => {
    const wrapper = mount(Home);
    expect(wrapper.findAll("[data-test='post']")).toHaveLength(1);

    const $thisWeek = wrapper.findAll("[data-test='period']")[1];
    await $thisWeek.trigger("click");

    expect(wrapper.findAll("[data-test='post']")).toHaveLength(2);

    const $thisMonth = wrapper.findAll("[data-test='period']")[2];
    await $thisMonth.trigger("click");

    expect(wrapper.findAll("[data-test='post']")).toHaveLength(3);
  });
});
