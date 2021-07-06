import Loader from 'react-loader-spinner';
export default function UserLoader(props) {
    const { showLoader } = props;
    if (showLoader) {
        return (
            <div className="Loader">
                <Loader type="Oval" color="#575756" height={150} width={150} />
            <div className="loading-text">Getting Users</div>
            </div>
        );
    }
    return props.children;
}
