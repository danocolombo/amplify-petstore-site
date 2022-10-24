import './App.css';
import { NavBar } from './ui-components';
import { Pets } from './ui-components';
import { Footer } from './ui-components';
function App() {
    return (
        <div className='App'>
            <NavBar width={'100%'} />
            <header className='App-header'>
                <Pets
                    overrideItems={({ item, index }) => ({
                        overrides: {
                            Name29766902: { color: 'blue' },
                            Button29766907: {
                                backgroundColor: 'yellow',
                                color: 'black',
                                onClick: () => alert(`${item.id}`),
                            },
                        },
                    })}
                />
            </header>
            <Footer width={'100%'} backgroundColor={'#B8CEF9'} />
        </div>
    );
}

export default App;
