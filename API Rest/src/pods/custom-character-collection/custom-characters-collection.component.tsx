import * as React from 'react';
import { CharacterEntityVm } from '../../common/models';
import { CharacterCard, TextFieldComponent } from '../../common/components';
import { Formik, useFormik } from 'formik';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import * as classes from './custom-characters.styles';

interface Props {
  charactersCollection: CharacterEntityVm[];
  onCharactersClick: (id: number) => void;
}

export const CustomCharactersCollectionComponent: React.FunctionComponent<
  Props
> = (props) => {
  const { charactersCollection, onCharactersClick } = props;

  const getInputName = (characterId: string | number): string => {
    return `best-sentence-${characterId}`;
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log('SUBMIT ' + values);
    },
  });

  const generateFormikConfig = (character: CharacterEntityVm): void => {
    formik.initialValues[getInputName(character.id)] = '';
  };

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {charactersCollection.map((character) => {
          generateFormikConfig(character);
          const customLabel = `Save your favorite ${character.name} quotes`;
          return (
            <li key={character.id}>
              <CharacterCard
                character={character}
                onClick={() => onCharactersClick(character.id)}
              />
              <Formik
                initialValues={formik.initialValues}
                onSubmit={formik.handleSubmit}
              >
                <form>
                  <TextFieldComponent
                    label={customLabel}
                    name={getInputName(character.id)}
                    id={getInputName(character.id)}
                    value={formik.values[getInputName(character.id)]}
                    onChange={formik.handleChange}
                  ></TextFieldComponent>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                  >
                    Save
                  </Button>
                </form>
              </Formik>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
