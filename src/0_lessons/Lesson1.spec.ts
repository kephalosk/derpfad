import { shallowMount } from "@vue/test-utils";
import HomeComponent from "@/0_lessons/Lesson1.vue";
import ConceptImage from "@/components/ConceptImage.vue";

describe("HomeComponent", () => {
  it("renders section", () => {
    const wrapper = shallowMount(HomeComponent);

    const section = wrapper.find("section");

    expect(section.exists()).toBe(true);
  });
});
