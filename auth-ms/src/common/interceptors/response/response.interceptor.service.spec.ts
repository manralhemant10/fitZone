import { Test, TestingModule } from '@nestjs/testing';
import { ResponseInterceptorService } from './response.interceptor.service';

describe('ResponseInterceptorService', () => {
  let service: ResponseInterceptorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResponseInterceptorService],
    }).compile();

    service = module.get<ResponseInterceptorService>(ResponseInterceptorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
