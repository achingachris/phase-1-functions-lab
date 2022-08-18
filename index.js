const scuberHeadquarters = 42;

// Returns a distance in blocks and also calculates distances below 42nd street
const distanceFromHqInBlocks = (pickUpLocation) => {
  const distanceInBlocks =
    pickUpLocation > scuberHeadquarters
      ? pickUpLocation - scuberHeadquarters
      : scuberHeadquarters - pickUpLocation;
  return distanceInBlocks;
};

// Returns a distance in feet
const distanceFromHqInFeet = (pickUpLocation) => {
  let distanceInBlocks = distanceFromHqInBlocks(pickUpLocation);
  return distanceInBlocks * 264;
};

// Calculates the number of feet a passenger travels given a starting block and an ending block
const distanceTravelledInFeet = (startingBlock, endingBlock) => {
  let distanceTravelled =
    endingBlock > startingBlock
      ? (endingBlock - startingBlock) * 264
      : (startingBlock - endingBlock) * 264;
  return distanceTravelled;
};

// Returns the fare for the customer given the same starting and ending block from distance travelled
const calculatesFarePrice = (startingBlock, endingBlock) => {
  let distanceInFeet = distanceTravelledInFeet(startingBlock, endingBlock);
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000) {
    if (distanceInFeet > 2500) {
      return "cannot travel that far";
    }
    return 25;
  }
};
