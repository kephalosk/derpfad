import { shallowMount } from "@vue/test-utils";
import HomeComponent from "@/components/HomeComponent.vue";

describe("HomeComponent", () => {
  it("renders div homeComponent", () => {
    const wrapper = shallowMount(HomeComponent);

    const divHomeComponent = wrapper.find("div");

    expect(divHomeComponent.exists()).toBe(true);
  });
});
