import { AxiosPromise } from 'axios';
import CONFIG from '../config/config';
import axiosInstance from '../utils/request';

class Services {
  // --------------- 热门歌手 --------------//
  public static getMusicList(): AxiosPromise {
    const api = `${CONFIG.API_PREFIX}/api/dingdong/miguMusicPopularSinger/list.json`;
    return axiosInstance({
      method: 'POST',
      url: api,
    });
  }
}

export default Services;
