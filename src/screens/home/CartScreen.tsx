import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import CartAddedItemsCard from "../../components/CartAddedItemsCard";
import AddressCard from "../../components/AddressCard";
import PaymentMethodCard from "../../components/PaymentMethodCard";

const INITIAL_ITEMS = [
  {
    id: 1,
    name: "Truffle Wagyu Burger",
    customization: "Extra Cheese, No Onion",
    price: 18.5,
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80",
  },
  {
    id: 2,
    name: "Zesty Quinoa Bowl",
    customization: "Regular Size",
    price: 14.2,
    qty: 2,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&q=80",
  },
];

const PAYMENT_METHODS = [
  { id: "applepay", type: "applepay" },
  { id: "visa", type: "card", last4: "•••• 4242", brand: "Visa Gold" },
];

const DELIVERY_FEE = 2.5;
const PROMO_DISCOUNT = 5.0;

export default function CartScreen({ navigation }:any) {
  const [cartItems, setCartItems] = useState(INITIAL_ITEMS);
  const [selectedPayment, setSelectedPayment] = useState("applepay");
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(true);

  const handleIncrease = (id:number) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );

  const handleDecrease = (id:number) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item,
      ),
    );

  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = promoApplied ? PROMO_DISCOUNT : 0;
  const total = subtotal + DELIVERY_FEE - discount;
  const totalItems = cartItems.reduce((s, i) => s + i.qty, 0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar  hidden={true}/>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
   
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Order Details</Text>
          <Text style={styles.redLabel}>{totalItems} Items</Text>
        </View>

        {cartItems.map((item) => (
          <CartAddedItemsCard
            key={item.id}
            item={item}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        ))}

        
        <View style={[styles.sectionRow, styles.mt24]}>
          <Text style={styles.sectionTitle}>Delivery Address</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.redLabel}>Change</Text>
          </TouchableOpacity>
        </View>
        <AddressCard
          label="Home"
          address={
            "4522 Premium Heights Dr,\nPenthouse B\nManhattan, New York, 10001"
          }
        />


        <View style={[styles.sectionRow, styles.mt24]}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.redLabel}>Manage</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.paymentRow}>
          {PAYMENT_METHODS.map((method) => (
            <PaymentMethodCard
              key={method.id}
              method={method}
              selected={selectedPayment === method.id}
              onSelect={setSelectedPayment}
            />
          ))}
        </View>


        <View style={styles.mt24}>
          <Text style={[styles.sectionTitle, { marginBottom: 12 }]}>
            Promo Code
          </Text>
          <View style={styles.promoRow}>
            <View style={styles.promoInputWrap}>
              <Ionicons
                name="pricetag-outline"
                size={17}
                color="#bbb"
                style={{ marginRight: 8 }}
              />
              <TextInput
                style={styles.promoInput}
                placeholder="Enter code"
                placeholderTextColor="#c0bbb4"
                value={promoCode}
                onChangeText={setPromoCode}
                returnKeyType="done"
              />
            </View>
            <Pressable
              style={styles.applyBtn}
              onPress={() => promoCode.length > 0 && setPromoApplied(true)}
            >
              <Text style={styles.applyBtnText}>Apply</Text>
            </Pressable>
          </View>
        </View>


        <View style={styles.summaryCard}>
          <SummaryRow label="Subtotal" value={`$${subtotal.toFixed(2)}`} labelStyle={undefined} valueStyle={undefined} />
          <SummaryRow
            label="Delivery Fee"
            value={`$${DELIVERY_FEE.toFixed(2)}`} labelStyle={undefined} valueStyle={undefined}          />
          {promoApplied && (
            <SummaryRow
              label="Promo Discount"
              value={`-$${discount.toFixed(2)}`}
              labelStyle={{ color: "#E8442A" }}
              valueStyle={{ color: "#2ca85a" }}
            />
          )}
          <View style={styles.divider} />
          <SummaryRow
            label="Total"
            value={`$${total.toFixed(2)}`}
            labelStyle={styles.totalLabel}
            valueStyle={styles.totalValue}
          />
        </View>

        <TouchableOpacity style={styles.placeOrderBtn} activeOpacity={0.85}>
          <Text style={styles.placeOrderText}>Place Order</Text>
          <Ionicons
            name="arrow-forward"
            size={20}
            color="#fff"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function SummaryRow({ label, value, labelStyle, valueStyle }:any) {
  return (
    <View style={styles.summaryRow}>
      <Text style={[styles.summaryLabel, labelStyle]}>{label}</Text>
      <Text style={[styles.summaryValue, valueStyle]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#faf9f7" },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 20, paddingTop: 4, paddingBottom: 44 },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1a1a1a",
    letterSpacing: -0.2,
  },
  redLabel: { fontSize: 14, fontWeight: "600", color: "#E8442A" },
  mt24: { marginTop: 24 },
  paymentRow: { flexDirection: "row", gap: 12 },
  promoRow: { flexDirection: "row", gap: 10 },
  promoInputWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 13,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  promoInput: { flex: 1, fontSize: 14, color: "#1a1a1a", padding: 0 },
  applyBtn: {
    backgroundColor: "#e8e5df",
    borderRadius: 14,
    paddingHorizontal: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  applyBtnText: { fontSize: 14, fontWeight: "600", color: "#555" },
  summaryCard: {
    backgroundColor: "#f0ede8",
    borderRadius: 20,
    padding: 18,
    marginTop: 24,
    gap: 11,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryLabel: { fontSize: 14, color: "#666", fontWeight: "500" },
  summaryValue: { fontSize: 14, color: "#1a1a1a", fontWeight: "600" },
  divider: { height: 1, backgroundColor: "#ddd8d0", marginVertical: 2 },
  totalLabel: { fontSize: 16, fontWeight: "800", color: "#1a1a1a" },
  totalValue: { fontSize: 16, fontWeight: "800", color: "#E8442A" },
  placeOrderBtn: {
    flexDirection: "row",
    backgroundColor: "#E8442A",
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
    shadowColor: "#E8442A",
    shadowOpacity: 0.4,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 7 },
    elevation: 8,
  },
  placeOrderText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
});
