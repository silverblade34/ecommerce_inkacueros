<template>
    <div class="flex justify-center items-center p-10">
        <div class="w-[80%]">
            <v-card class="mx-auto shadow-lg w-full">
                <h1 class="text-center font-bold text-3xl py-3 text-gray-500">Checkout</h1>
                <v-timeline direction="horizontal" line-inset="12">
                    <v-timeline-item :dot-color="typeForm == 'DIRECTION' ? 'indigo' : 'grey'">
                        <template v-slot:opposite>
                            Dirección de envio
                        </template>
                    </v-timeline-item>

                    <v-timeline-item :dot-color="typeForm == 'CONFIRM' ? 'indigo' : 'grey'">
                        <template v-slot:opposite>
                            Confirma tu pedido
                        </template>
                    </v-timeline-item>
                </v-timeline>
                <div class="px-[5rem] py-10" v-if="typeForm == 'DIRECTION'">
                    <p class="font-bold text-gray-500">Dirección de envio</p>
                    <div class="grid grid-cols-2 gap-5">
                        <div>
                            <v-text-field label="Nombre" variant="underlined" color="indigo" v-model="name"
                                @input="validateText('name')"></v-text-field>
                        </div>
                        <div>
                            <v-text-field label="Apellidos" variant="underlined" color="indigo" v-model="lastName"
                                @input="validateText('lastName')"></v-text-field>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-5">
                        <v-text-field label="Dirección" variant="underlined" color="indigo"
                            v-model="address1"></v-text-field>
                        <v-text-field label="DNI/RUC" variant="underlined" color="indigo" v-model="dni"
                            @input="validateNumber('dni')"></v-text-field>
                    </div>
                    <div class="grid grid-cols-2 gap-5">
                        <div>
                            <v-text-field label="Ciudad" variant="underlined" color="indigo" v-model="city"
                                @input="validateText('city')"></v-text-field>
                        </div>
                        <div>
                            <v-text-field label="Provincia" variant="underlined" color="indigo" v-model="state"
                                @input="validateText('state')"></v-text-field>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-5">
                        <div>
                            <v-text-field label="Codigo postal" variant="underlined" color="indigo" v-model="zipcode"
                                @input="validateNumber('zipcode')"></v-text-field>
                        </div>
                        <div>
                            <v-text-field label="País" variant="underlined" color="indigo" v-model="country"
                                @input="validateText('country')"></v-text-field>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <v-btn size="small" color="indigo" @click="nextStage">Siguiente</v-btn>
                    </div>
                </div>
                <div class="px-[5rem] py-10" v-if="typeForm == 'CONFIRM'">
                    <p class="font-bold text-gray-500">Confirma tu pedido</p>
                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-left">Imagen</th>
                                <th class="text-left">Producto</th>
                                <th class="text-left">Cantidad</th>
                                <th class="text-left">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in dataTrolley" :key="item.product.id">
                                <td>
                                    <div class="w-[5rem]">
                                        <ImgComponentVue :product="item.product" />
                                    </div>
                                </td>
                                <td>{{ item.product.Name }}</td>
                                <td>{{ item.amount }}</td>
                                <td>{{ item.amount * item.product.Price }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                    <div class="flex justify-end w-full">
                        <div class="w-[15rem]">
                            <div class="pt-3 pb-3">
                                <div class="flex flex-col border border-gray-400 rounded-lg">
                                    <div class="flex justify-between p-3 font-bold text-gray-500">
                                        <span>Total</span>
                                        <span>S/.{{ cartSubtotal }} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end gap-3 pt-5">
                        <v-btn size="small" color="indigo" variant="tonal"
                            @click="typeForm = 'DIRECTION'">Retroceder</v-btn>
                        <v-btn size="small" color="indigo" @click="endOrder">Realizar orden</v-btn>
                    </div>
                </div>
            </v-card>
        </div>
    </div>
    <v-dialog v-model="dialogLoader" :scrim="false" persistent width="auto">
        <v-card color="brown-darken-1">
            <v-card-text>
                Procesando...
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
import ImgComponentVue from '@/components/generales/ImgComponent.vue';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
import store from "@/store";
import { basicAlert } from '@/helpers/SweetAlert';
import { createOrderApi, createProductOrderApi, createOrdersItemApi } from '@/api/OrderService';
import { validateError } from '@/helpers/Validators';

export default ({
    components: { ImgComponentVue },
    methods: {
        validateText(field) {
            // Expresión regular que permite letras, espacios y caracteres acentuados
            const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/;
            // Filtrar el valor del campo basado en la expresión regular
            if (!regex.test(this[field])) {
                this[field] = this[field].replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
            }
        },
        validateNumber(field) {
            // Expresión regular que permite solo números
            const regex = /^[0-9]*$/;
            // Filtrar el valor del campo basado en la expresión regular
            if (!regex.test(this[field])) {
                this[field] = this[field].replace(/[^0-9]/g, '');
            }
        },
    },
    setup() {
        const router = useRouter();
        const typeForm = ref("DIRECTION");
        const dataTrolley = ref([]);
        const name = ref("");
        const lastName = ref("");
        const address1 = ref("");
        const city = ref("");
        const dni = ref("");
        const country = ref("");
        const state = ref("");
        const zipcode = ref("");
        const dialogLoader = ref(false);

        onMounted(() => {
            dataTrolley.value = store.state.trolley.map(item => ({
                ...item,
                amount: item.amount || 1
            }));
        });

        const cartSubtotal = computed(() => {
            return dataTrolley.value.reduce((total, item) => {
                return total + (item.amount * item.product.Price);
            }, 0);
        });

        const nextStage = () => {
            if (name.value != "" && lastName.value != "" && address1.value != "" && city.value != "" && country.value != "" && state.value != "" && zipcode.value != "" && dni.value != "") {
                typeForm.value = "CONFIRM";
            } else {
                basicAlert(
                    () => { },
                    "warning",
                    "Advertencia",
                    "Rellene todos los campos"
                );
            }
        }

        const endOrder = async () => {
            try {
                dialogLoader.value = true;
                const data = {
                    Delivery_Fee: "35",
                    Order_Status: "in stock",
                    address1: address1.value,
                    City: city.value,
                    Country: country.value,
                    Name: name.value + " " + lastName.value,
                    State: state.value,
                    Zipcode: zipcode.value,
                }
                const createOrderResponse = await createOrderApi(data);
                console.log(createOrderResponse.data.id);
                const currentDate = new Date().toISOString();
                const dataIdProducts = [];
                for (const item of dataTrolley.value) {
                    const dataProduct = {
                        Amount: item.amount,
                        TotalPrice: item.product.Price * item.amount,
                        IdProduct: item.product.id,
                        creationDate: currentDate
                    };
                    const responseProduct = await createProductOrderApi(dataProduct);
                    dataIdProducts.push(responseProduct.data.id);
                }

                console.log("------------------------------------------3");
                console.log(dataIdProducts);
                const orderitem = {
                    IdProductsOrder: dataIdProducts,
                    IdOrder: createOrderResponse.data.id,
                    IdUser: store.state.userId,
                    IdentityDocument: dni.value,
                    PictureUrl: "img"
                }
                await createOrdersItemApi(orderitem)

                basicAlert(
                    () => {
                        store.commit("setTrolley", []);
                        router.push("/products");
                    },
                    "success",
                    "Logrado",
                    "Se ha registrado tu orden de compra correctamente"
                );
                dialogLoader.value = false;
            } catch (e) {
                dialogLoader.value = false;
                validateError("Se ha generado un error inesperado");
            }
        }

        return {
            nextStage,
            endOrder,
            dialogLoader,
            cartSubtotal,
            dataTrolley,
            typeForm,
            dni,
            name,
            lastName,
            address1,
            city,
            country,
            state,
            zipcode,
        }
    }
})
</script>