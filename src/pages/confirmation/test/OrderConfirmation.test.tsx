import { HttpResponse, http } from "msw"
import { server } from "../../../mocks/server"
import { render, screen } from "../../../test-utils/testing-library-utils";
import OrderConfirmation from "../OrderConfirmation";

test("error response from server for submitting order", async () => {
    server.resetHandlers(
        http.post("http://localhost:3030/order", () => {
            return new HttpResponse(null, {status: 500});
        })
    );

    render(<OrderConfirmation />);

    const alert = await screen.findByRole("alert");
    expect(alert).toHaveTextContent("예상되지 않은 오류가 있습니다. 잠시 후에 다시 시도해주세요");
})