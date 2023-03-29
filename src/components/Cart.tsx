import React from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectCart } from "../features/store/productSlice";
import { RootState } from "../features/store/store";
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const Cart = () => {
  const products = useTypedSelector(selectCart);
  const dispatch = useDispatch();
  return (
    <div className="overflow-x-auto w-full">
      {products.items.length > 0 ? (
        <table className="table-compact w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          {products.items.map((p) => (
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={p.images[0]}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold 	">{p.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                <p>{p.description}</p>   <br />
                </td>
                <td> {p.price}</td>
                <th>
                  <button
                    className="btn btn-error btn-xs"
                    onClick={()=>dispatch(removeFromCart(p))}
                  >
                    Remove
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th><div className="stat">
              <div className="stat-title">Total </div>
    <div className="stat-value">${products.total}</div>
    <div className="stat-desc">euro</div>
                
               </div>
               <div className="btn btn-secondary">Checkout</div></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      ) : (
        <h1>nothing to display</h1>
      )}
    </div>
  );
};
