import { shallowMount } from "@vue/test-utils";
import HomeComponent from "@/0_lessons/Lesson1.vue";
import ConceptImage from "@/components/ConceptImage.vue";

describe("HomeComponent", () => {
  it("renders div homeComponent", () => {
    const wrapper = shallowMount(HomeComponent);

    const divHomeComponent = wrapper.find("div");

    expect(divHomeComponent.exists()).toBe(true);
  });

  it("renders Concept 1: Personal Computer", () => {
    const wrapper = shallowMount(HomeComponent);

    const divHomeComponent = wrapper.findComponent(ConceptImage);

    expect(divHomeComponent.exists()).toBe(true);
  });
});
