import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { ProductsModule } from "./products/products.module";
import { OrdersModule } from "./orders/orders.module";
import { LogisticsModule } from "./logistics/logistics.module";

// É como se fosse uma pasta, ele que guarda os arquivos `controller` e `service/providers`. Ele agrupa os controles/`controllers` e serviços/`services`;
@Module({
  imports: [AuthModule, UsersModule, ProductsModule, OrdersModule, LogisticsModule],
  controllers: [AppController], // os controllers direcionam a requisição
  providers: [AppService], // os services executamos aquilo que realmente precisamos
})
export class AppModule {}
