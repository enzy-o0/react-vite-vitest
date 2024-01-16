import { Alert } from 'react-bootstrap';

type AlertBannerPropType = {
    message?: string;
    variant: 'danger' | 'warning';
};

const AlertBanner = ({ message, variant }: AlertBannerPropType) => {
    const alertMessage = message || '예상되지 않은 에러가 있습니다. 추후에 다시 시도해주세요.';
    const alertVariant = variant || 'danger';

    return (
        <Alert variant={alertVariant} style={{ backgroundColor: 'red' }}>
            {alertMessage}
        </Alert>
    );
};

export default AlertBanner;
