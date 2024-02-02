import { component$ } from "@builder.io/qwik";
import {
  useAuthSignin,
  useAuthSession,
  useAuthSignout,
} from "~/routes/plugin@auth";

export default component$(() => {
  const signIn = useAuthSignin();
  const session = useAuthSession();
  const signOut = useAuthSignout();

  return (
    <header>
      <div>
        <div>
          <a href="/" title="qwik"></a>
        </div>
        <ul>
          <li>
            <a
              href="https://qwik.builder.io/docs/components/overview/"
              target="_blank"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="https://qwik.builder.io/examples/introduction/hello-world/"
              target="_blank"
            >
              Examples
            </a>
          </li>
          <li>
            <a
              href="https://qwik.builder.io/tutorial/welcome/overview/"
              target="_blank"
            >
              Tutorials
            </a>
          </li>
          <li>
            <span>{session.value?.user?.email}</span>
          </li>
          <li>
            {session.value?.user === undefined && (
              <button
                onClick$={() =>
                  signIn.submit({
                    providerId: "github",
                    options: { callbackUrl: "http://localhost:5173/" },
                  })
                }
              >
                Sign In
              </button>
            )}
          </li>
          <li>
            {session.value?.user !== undefined && (
              <button onClick$={() => signOut.submit({ callbackUrl: "/" })}>
                Sign Out
              </button>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
});
