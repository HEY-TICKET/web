import { GetPlaceParams, GetPlaceReturnValue } from 'apis/place/type';
import { HttpClient } from 'core/HttpClient';

class PlaceApi extends HttpClient {
  constructor() {
    super({ baseUrl: process.env.NEXT_PUBLIC_API_URL });
  }
  getPlace = async (params: GetPlaceParams): Promise<GetPlaceReturnValue> => {
    return await this.instance.get(`/places/${params.placeId}`);
  };
}

const placeService = new PlaceApi();

export default placeService;
