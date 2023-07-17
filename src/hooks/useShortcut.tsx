import { useEffect, useRef, type RefObject } from 'react';

type ShortcutProps = {
  // ショートカットキーに特定のキーを含めるかどうか
  altKey?: boolean;
  ctrlKey?: boolean;
  metaKey?: boolean;  // Win: Windows キー (⊞), Mac: command キー (⌘)
  shiftKey?: boolean;
  key: KeyboardEvent['key'];

  // ショートカットキーを押した際の動作設定
  onKeyDown?: (event: KeyboardEvent) => void;

  // ショートカットキーの動作を割り当てたいHTML要素 (未設定時はwindowオブジェクトに設定)
  targetRef?: RefObject<HTMLElement>;
};

// 引数の最新値を返却するフック
function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

export function useShortcut({
  altKey,
  ctrlKey,
  metaKey,
  shiftKey,
  key,
  onKeyDown,
  targetRef,
}: ShortcutProps) {
  // 最新のonKeyDown関数を参照する
  const onKeyDownLatest = useLatest(onKeyDown);
  useEffect(() => {
    // 各キーの状態, onKeyDownLatest, targetRefが更新された時
    const eventListener = (event: KeyboardEvent) => {
      // 設定したキーが未押下の時、関数は即座に終了
      if (altKey && !event.altKey) return;
      if (ctrlKey && !event.ctrlKey) return;
      if (metaKey && !event.metaKey) return;
      if (shiftKey && !event.shiftKey) return;
      if (event.key !== key) return;
      // 設定したキーが押下時
      event.preventDefault();
      onKeyDownLatest.current?.(event);
    };
    if (targetRef?.current) {
      // 特定のHTML要素にショートカットキーを割り当てる場合
      const target = targetRef.current;
      target.addEventListener('keydown', eventListener);
      // アンマウント時にイベントリスナーを削除 (べき等性保証のため)
      return () => target.removeEventListener('keydown', eventListener);
    } else {
      // targetRef未設定時はwindowオブジェクトに設定
      window.addEventListener('keydown', eventListener);
      return () => window.removeEventListener('keydown', eventListener);
    }
  }, [altKey, ctrlKey, key, metaKey, onKeyDownLatest, shiftKey, targetRef]);
}
