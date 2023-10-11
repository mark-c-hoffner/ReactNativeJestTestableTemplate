import { render, waitFor } from '@testing-library/react-native';

const dependencyMock = jest.fn()

describe('App', () => {

    let App; 

    beforeEach(async () => {
        jest.doMock('./Dependency', () => dependencyMock)

        const obj = await import('./App.jsx');
        App = obj.default;
    })

    afterEach(() => {
        jest.resetAllMocks();
    })

    it('renders without crashing', () => {
        render(<App />);
    })

    it('displays the text', () => {
        const { getByText } = render(<App />);
        expect(getByText('Hello world! from component jsx')).toBeTruthy();
    })

    it('renders Orchestrator component', () => {
        render(<App />);
        expect(dependencyMock).toHaveBeenCalled();
    })
})