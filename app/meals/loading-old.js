import Classes from './loading.module.css';

export default function Loading() {
    return (
        <p className={Classes.loading}>Fetching meals...</p>
    );
}