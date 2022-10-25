import { useState } from 'react';
import './App.css';
import { NavBar } from './ui-components';
import { Pets } from './ui-components';
import { PetDetails } from './ui-components';
import { EditPet } from './ui-components';
import { Footer } from './ui-components';
function App() {
    const [showEditForm, setShowEditForm] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [pet, setPet] = useState(false);
    const [updatePet, setUpdatePet] = useState(false);
    const [petName, setPetName] = useState('');
    const [petAbout, setPetAbout] = useState('');
    const [petBreed, setPetBreed] = useState('');
    const [petAge, setPetAge] = useState('');
    const [petColor, setPetColor] = useState('');
    const [petImage, setPetImage] = useState('');

    const navBarOverrides = {
        image: {
            src: 'https://img.icons8.com/color/50/000000/bird',
        },
        NavBar: {
            backgroundColor: 'white',
        },
        'Add Pet': {
            style: {
                cursor: 'pointer',
            },
            onClick: () => {
                setShowEditForm(true);
                setPetName('');
                setPetAbout('');
                setPetBreed('');
                setPetColor('');
                setPetImage('');
                setPetAge('');
            },
        },
    };
    const editFormOverrides = {
        Icon: {
            style: {
                cursor: 'pointer',
            },
            onClick: () => {
                setShowEditForm(false);
            },
        },
        NameGroup: {
            placeholder: 'Pet name',
            value: petName,
        },
        AgeGroup: {
            placeholder: '0',
            value: petAge,
        },
        AboutGroup: {
            placeholder: 'pet details',
            value: petAbout,
        },
        ColorGroup: {
            placeholder: 'Pet color',
            value: petColor,
        },
        BreedGroup: {
            placeholder: 'Pet breed',
            value: petBreed,
        },
        ImageGroup: {
            placeholder: 'URL',
            value: petImage,
        },
        image: {
            src:
                petImage === ''
                    ? 'https://images.unsplash.com/photo-1583511666445-775f1f2116f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZG9nfHx8fHx8MTY2NjY5MTk3Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
                    : petImage,
        },
    };
    const detailsOverrides = {
        'close-Icon': {
            style: {
                cursor: 'pointer',
            },
            onClick: () => {
                setShowDetails(false);
            },
        },
    };

    return (
        <div className='App'>
            <NavBar width={'100%'} overrides={navBarOverrides} />
            <header className='App-header'>
                {showDetails && (
                    <PetDetails
                        pet={pet}
                        style={{ textAlign: 'left', margin: '5rem' }}
                        overrides={detailsOverrides}
                    />
                )}
                {showEditForm && (
                    <EditPet
                        pet={updatePet}
                        style={{ textAlign: 'left', margin: '5rem' }}
                        overrides={editFormOverrides}
                    />
                )}
                <Pets
                    overrideItems={({ item, index }) => ({
                        overrides: {
                            Name29766902: { color: 'blue' },
                            Button29766907: {
                                backgroundColor: 'yellow',
                                color: 'black',
                                onClick: () => alert(`${item.id}`),
                            },
                            Button34522689: {
                                onClick: () => {
                                    setShowDetails(true);
                                    setPet(item);
                                },
                            },
                            Button34552709: {
                                onClick: () => {
                                    if (!showEditForm) setShowEditForm(true);

                                    setUpdatePet(item);
                                    setPetName(item.name);
                                    setPetBreed(item.breed);
                                    setPetAbout(item.about);
                                    setPetAge(item.age);
                                    setPetColor(item.color);
                                    setPetImage(item.image);
                                },
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
