import { useLoaderData, useParams } from 'react-router-dom';

const EstateDetails = () => {
  const selectedEstates = useLoaderData();
  const { id } = useParams();

  const selectedEstate = selectedEstates.find(
    selectedEstate => selectedEstate.id === parseInt(id)
  );

  const { name, image } = selectedEstate;

  return <div>{image}</div>;
};

export default EstateDetails;
