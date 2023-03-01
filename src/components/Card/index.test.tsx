import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from "../../components/Card";
import CardFooter from "../../components/Card/CardFooter";

describe('Card',()=> {
    describe('render component', () => {
        it("if props exist", () => {
            const allowance = {
                id: 2,
                name: "WFH",
                renewal: "monthly",
                currency: "£",
                amount: 100,
                spent: "0",
                active: true,
                type: "expense",
            }
            render(<Card allowance={allowance}/>);

            // DOM Query
            expect(
                screen.getByTestId(`card-${allowance.id}`)
            ).toBeInTheDocument();
        });
    })
})

describe('CardFooter', () => {
    describe('render activate footer', () => {
        it("if active is false", () => {
            const allowance = {
                id: 2,
                name: "WFH",
                renewal: "monthly",
                currency: "£",
                amount: 100,
                spent: "0",
                active: false,
                type: "expense",
            }
            render(<CardFooter allowance={allowance}/>);

            // DOM Query
            expect(
                screen.getByTestId(`activate-section`)
            ).toBeInTheDocument();
        });
    })

    describe('render percentage footer', () => {
        it("if active is true", () => {
            const allowance = {
                id: 2,
                name: "WFH",
                renewal: "monthly",
                currency: "£",
                amount: 100,
                spent: "0",
                active: true,
                type: "expense",
            }
            render(<CardFooter allowance={allowance}/>);

            // DOM Query
            expect(
                screen.getByTestId(`percentage-section`)
            ).toBeInTheDocument();
        });
    })
})


