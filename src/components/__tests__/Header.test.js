import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../Utils/store"
import { StaticRouter } from "react-router-dom/server";
test("Logo should load on rendering header", () => {
    const header = render(
        <StaticRouter >
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    console.log(header);
    // !!!!!!!! check if logo is loaded
    const logo = header.getAllByTestId("logo");
    console.log(logo);

    // bcz getting array of objects or all src = logo
    expect(logo[0].src).toBe("https://upload.wikimedia.org/wikipedia/commons/a/ad/Krishna_Logo.png");



});

// !!!!!!!! check if online-status -> T/F

test("Online status should be green on rendering header", () => {
    const header = render(
        <StaticRouter >
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    // const on_off = header.getAllByTestId("online-status");
    // console.log(on_off);

    // expect(on_off[0].innerHTML).toBe("✅");

    const on_off = header.getByTestId("online-status");
    console.log(on_off);

    expect(on_off.innerHTML).toBe("✅");



});


// !!!!!!!! cart should have 0 items

test("cart should have 0 items on rendering header", () => {
    const header = render(
        <StaticRouter >
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );


    expect(Cartt.innerHTML).toBe("Cart - 1 items");



}); 