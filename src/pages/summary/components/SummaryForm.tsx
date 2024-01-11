import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SummaryForm = () => {
    const [checkboxIsChecked, setCheckboxIsChecked] = React.useState(false);

    const checkboxLabel = (
        <span>
            동의합니다. <span style={{ color: 'blue' }}>약관 동의</span>
        </span>
    );

    const checkboxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckboxIsChecked(e.target.checked);
    };

    const buttonOnClick = () => {};

    return (
        <Form>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check
                    type="checkbox"
                    checked={checkboxIsChecked}
                    onChange={checkboxOnChange}
                    label={checkboxLabel}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!checkboxIsChecked} onClick={buttonOnClick}>
                구매하기
            </Button>
        </Form>
    );
};

export default SummaryForm;
