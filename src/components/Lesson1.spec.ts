import { shallowMount } from "@vue/test-utils";
import HomeComponent from "@/components/Lesson1.vue";
import InfoCard from "@/components/InfoCard.vue";

describe("HomeComponent", () => {
  it("renders div homeComponent", () => {
    const wrapper = shallowMount(HomeComponent);

    const divHomeComponent = wrapper.find("div");

    expect(divHomeComponent.exists()).toBe(true);
  });

  it("renders InfoCard", () => {
    const wrapper = shallowMount(HomeComponent);

    const divHomeComponent = wrapper.findComponent(InfoCard);

    expect(divHomeComponent.exists()).toBe(true);
  });
});
