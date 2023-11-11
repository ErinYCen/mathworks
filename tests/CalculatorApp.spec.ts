import { mount } from "@vue/test-utils";
import CalculatorApp from "@Users/erinc/DDisk/Github/web-calculator/src/components/CalculatorApp.vue";

describe("CalculatorApp.vue", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(CalculatorApp);
  });

  //Unit test for "+"
  describe("+", () => {
    test("#s + #s", () => {
      expect(wrapper.vm.add(3, 4)).toBe(7);
    });

    test("0 + #s", () => {
      expect(wrapper.vm.add(0, 2)).toBe(2);
    });

    test("#s + 0", () => {
      expect(wrapper.vm.add(5, 0)).toBe(5);
    });

    test("0 + 0", () => {
      expect(wrapper.vm.add(0, 0)).toBe(0);
    });
  });
});
