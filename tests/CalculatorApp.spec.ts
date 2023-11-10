import { mount } from "@vue/test-utils";
import CalculatorApp from "/Users/erinc/DDisk/Github/web-calculator/src/components/CalculatorApp.vue";
describe("CalculatorApp.vue - Addition Functionality", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(CalculatorApp);
  });

  const clickNumber = (number: number) => {
    const button = wrapper
      .findAll("button")
      .filter((btn) => btn.text() === number.toString())[0];
    button.trigger("click");
  };

  const clickOperation = (operation: string) => {
    const button = wrapper
      .findAll("button")
      .filter((btn) => btn.text() === operation)[0];
    button.trigger("click");
  };

  const clickEquals = () => {
    const button = wrapper.find(".equals");
    button.trigger("click");
  };

  //Test #s + #s
  it("addup"),
    async () => {
      clickNumber(3);
      clickOperation("+");
      clickNumber(4);
      clickEquals();

      expect(wrapper.find(".display").test()).toBe("7");
    };
});
